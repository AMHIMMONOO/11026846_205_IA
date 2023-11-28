
const Events = () => {

  return (
    <section className="events">
      <div className="container">
        <h2>Events</h2>
        <div className="events-calendar">
          <h3>Event Calendar</h3>
          <iframe
            src="https://calendar.google.com/calendar/embed?src=example.com_1234567890%40group.calendar.google.com&ctz=Africa%2FAccra"
            title="Event Calendar"
            width="800"
            height="600"
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Events;