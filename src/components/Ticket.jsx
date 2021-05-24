import React from 'react';
import { Link } from 'react-router-dom';

const Ticket = () => {
    return (<>
      <section className="containerTicket">
      <h1>Ticket</h1>
      <div className="row">
        <article className="card fl-left">
          <section className="date">
            <time datetime="25th may"> <span>25</span><span>May</span> </time>
          </section>
          <section className="card-cont">
            <small>Movies</small>
            <h3>Tom & Jerry</h3>
            <div className="even-date">
              <i className="fa fa-calendar"></i>
              <time>
                <span>wednesday 28 december 2014</span>
                <span>08:55pm to 12:00 am</span>
              </time>
            </div>
            <div className="even-info">
              <i className="fa fa-map-marker"></i>
              <p>
                Status:
                Pending resolution
              </p>
            </div>
            <Link to="/tickets">Tickets</Link>
          </section>
        </article>
      </div>
    </section>
    </>)
}

export default Ticket;