const events = [
    { id: 1, title: "Rock Concert", date: "Dec 10", image: "Black-White-Rock-Music-Ticket.png" },
    { id: 2, title: "Jazz Night", date: "Dec 15", image: "Grey-Black-Purple-Minimalist-Music-Night-Event-Ticket-1.png" },
    { id: 3, title: "Stand-Up Comedy", date: "Dec 20", image: "White-Purple-Simple-Modern-Summer-Festival-Music-Ticket.png" },
  ];
  
  const FeaturedEvents = () => {
    return (
      <div className="py-10 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-6">Featured Events</h2>
        <div className="grid gap-6 md:grid-cols-3 px-4">
          {events.map(event => (
            <div key={event.id} className="bg-white rounded-lg shadow-lg">
              <img src={event.image} alt={event.title} className="rounded-t-lg w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{event.title}</h3>
                <p className="text-gray-600">{event.date}</p>
                <button className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Buy Tickets
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  export default FeaturedEvents;
  