import React from 'react';

const Book = () => {
    return (<>
    <div className="imgBackgroundBooking">
      <h1>Ticket Now</h1>
      <div className="containerBook">
        <form action="/ticket">
          <div className="group">
            <label for="Movies">Movies</label>
            <select id="Movies" name="Movies" required>
              <option value="Peter Rabbit 2">Peter Rabbit 2</option>
              <option value="Radhe : The Most Wanted Bhai">
                Radhe : The Most Wanted Bhai
              </option>
              <option value="The Unholy">The Unholy</option>
              <option value="TomandJerry">
                Tom & Jerry : The Movie (2021)
              </option>
              <option value="Dream Horse">
                Dream Horse
              </option>
              <option value="Nobody">
                Nobody
              </option>
            </select>
          </div>
          <div className="group">
          <label>Time:</label>
          <select id="time" name="time" required>
                                    <option value="10 AM">10 AM</option>
                                    <option value="12 PM">12 AM</option>
                                    <option value="2 PM">2 PM</option>
                                    <option value="2 PM">4 PM</option>
                                    <option value="6 PM">6 PM </option>
                                    <option value="8 PM">8 PM</option>
                    </select>
          </div>
          <div className="group">
            <label for="movies">Your favorite Movies :</label><br />
            <input type="checkbox" id="action" name="action" value="action" />
            <span>Action Films</span><br />
            <input type="checkbox" id="zombie" name="zombie" value="zombie" />
            <span>Zombie</span><br />
            <input type="checkbox" id="comedy" name="comedy" value="comedy" />
            <span>Comedies</span><br />
            <input type="checkbox" id="dramas" name="dramas" value="dramas" />
            <span>Dramas</span><br />
          </div>
          <div className="group">
            <label for="gender">Gender:</label>
            <input type="radio" id="gender" value="male " /><span>Male </span>
            <input type="radio" value="female" id="gender" /><span>Female</span>
          </div>
          <div className="group">
            <label for="subject">Subject</label>
            <textarea
              id="subject"
              name="subject"
              placeholder="Write something.."
            ></textarea>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
    </>)
}

export default Book;