import Event from './Event';
import './Event.css';

const Calendar = () => {
    return (
      <div className="Calendar">
        <table>
          <thead>
            <tr>
              <th>Sunday</th>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
              <th>Saturday</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="time">8 am</td>
              <Event event="Starbucks ☕️" color="green" />
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <Event event="Yolk 🍳" color="green" />
              <td></td>
            </tr>

            <tr>
              <td className="time">9 am</td>
              <td></td>
              <td></td>
              <td></td>
              <Event event="Subway 🚊" color="pink" location="Station A" />
              <Event event="The Bean 🫘" color="blue" location="Cafe B" />
              <td></td>
            </tr>
            <tr>
              <td className="time">10 am</td>
              <td></td>
              <td></td>
              <td></td>
              <Event color="pink" event="Conference Call" location="Office" />
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td className="time">11 am</td>
              <td></td>
              <td></td>
              <td></td>
              <Event color="green" event="Team Sync" location="Meeting Room 1" />
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td className="time">12 pm</td>
              <Event color="blue" event="Lunch with Client" location="Restaurant C" />
              <td></td>
              <td></td>
              <Event color="green" event="Project Discussion" location="Conference Room" />
              <td></td>
              <td></td>
              <td></td>
              <Event color="pink" event="Brainstorming" location="Office" />
            </tr>
            <tr>
              <td className="time">1 pm</td>
              <td></td>
              <Event color="green" event="Team Meeting" location="Meeting Room 2" />
              <td></td>
              <td></td>
              <Event color="blue" event="Code Review" location="Office" />
              <td></td>
              <Event color="pink" event="Design Review" location="Office" />
              <td></td>
            </tr>
            <tr>
              <td className="time">2 pm</td>
              <Event color="pink" event="Project Review" location="Conference Room" />
              <td></td>
              <td></td>
              <Event color="green" event="Client Call" location="Office" />
              <td></td>
              <td></td>
              <Event color="blue" event="Team Sync" location="Meeting Room 3" />
              <td></td>
            </tr>
            <tr>
              <td className="time">3 pm</td>
              <td></td>
              <Event color="blue" event="Client Call" location="Office" />
              <td></td>
              <Event color="pink" event="Project Update" location="Office" />
              <td></td>
              <td></td>
              <Event color="green" event="Team Meeting" location="Meeting Room 4" />
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
};

export default Calendar;
