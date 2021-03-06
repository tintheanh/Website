import React from 'react';
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Member from '../Member/Member';
import pattern from '../../static_images/pattern.png';

export default function Team(props) {
  const { teammems } = props;

  const renderTeamMems = () => {
    return (
      <div className="row inline-columns">
        {teammems.map((mem) => (
          <Member key={mem.id} mem={mem} />
        ))}
      </div>
    );
  };

  if (!teammems.length) {
    return null;
  }

  return (
    <section
      id="team"
      className="front-page-section"
      style={{
        paddingBottom: 40,
        paddingTop: 65,
        background: `url(${pattern})`,
      }}
    >
      <div
        id="our-team"
        className="section-header"
        style={{ marginBottom: 55 }}
      >
        <div className="container">
          <div className="row">
            <div
              className="col-sm-12"
              style={{
                maxWidth: '800px',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              <h3 className="title">Official Team Members</h3>
              <p
                style={{
                  fontSize: 16,
                  color: 'rgb(119, 119, 119)',
                  marginTop: 18,
                }}
              >
                Official members have demonstrated proven commitment to our
                community by completing one or more of our membership criteria.
              </p>
              <AnchorLink href="#get-involved">
                See how you can join our team below!
              </AnchorLink>
            </div>
          </div>
        </div>
      </div>
      <div className="section-content">
        <div className="container">{renderTeamMems()}</div>
      </div>
      <div style={{ marginTop: 24 }}>
        <Link
          to="/alumni"
          style={{
            background: 'rgb(241, 210, 4)',
            padding: `12px 32px`,
            color: 'white',
            fontSize: 16,
            fontWeight: '600',
            marginBottom: 24,
            borderRadius: 4,
          }}
        >
          Our Alumni
        </Link>
      </div>
    </section>
  );
}
