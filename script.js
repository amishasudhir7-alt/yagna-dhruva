import { animate } from "https://cdn.jsdelivr.net/npm/motion@latest/+esm";

// Animate the main heading
animate(
  ".hero h1",
  { opacity: [0, 1], y: [40, 0] },
  { duration: 0.8 }
);

// Animate the hero paragraph
animate(
  ".hero p",
  { opacity: [0, 1], y: [20, 0] },
  { duration: 1, delay: 0.2 }
);
const events = [
  {
    name: "Tower of Tension",
    category: "Technology",
    date: "Oct 09, 2026",
    time: "10:00 AM",
    venue: "Main Courtyard",
    description: "Build a stable tower using paper straws.",
    seats: 12
  },
  {
    name: "Game Dev Workshop",
    category: "Workshop",
    date: "Oct 10, 2026",
    time: "09:30 AM",
    venue: "Computer Lab",
    description: "Discover how interactive games are made.",
    seats: 8
  },
  {
    name: "KALEDIO Designathon",
    category: "Design",
    date: "Oct 10, 2026",
    time: "10:00 AM",
    venue: "Innovation Hall",
    description: "Turn creative ideas into a design solution.",
    seats: 5
  },
  {
    name: "Bid to Build",
    category: "Technology",
    date: "Oct 10, 2026",
    time: "11:00 AM",
    venue: "Seminar Hall",
    description: "Bid for tools and build a creative website.",
    seats: 18
  },
  {
    name: "IoT Arduino Lab",
    category: "Workshop",
    date: "Oct 09, 2026",
    time: "01:30 PM",
    venue: "Electronics Lab",
    description: "Explore sensors, circuits and IoT.",
    seats: 0
  },
  {
    name: "Pixel Rush",
    category: "Gaming",
    date: "Oct 10, 2026",
    time: "02:00 PM",
    venue: "Activity Centre",
    description: "Take part in a fun gaming challenge.",
    seats: 14
  },
  {
    name: "Cyber Sleuth",
    category: "Technology",
    date: "Oct 08, 2026",
    time: "10:00 AM - 12:00 PM",
    venue: "LBSITW",
    description:
      "Explore digital forensics and cyber crime investigation. Speaker: Muhammed Ashique",
    seats: 15,
    fee: "₹100"
  },
  {
  name: "Duo Showdown",
  category: "Dance",
  date: "Oct 10, 2026",
  time: "Time not specified",
  venue: "LBSITW",
  description:
    "A high-energy dance competition for duos. Prize pool: ₹10,000.Entry fee: ₹200 per person (₹400 per team).",
  seats: 100,
  fee: "₹400 per team",
},
{
  name: "Fusion Pitch",
  category: "Technology",
  date: "Date not specified",
  time: "Time not specified",
  venue: "LBS Institute of Technology for Women",
  description:
    "Two unrelated ideas combine into one extraordinary creation. Team size: 2–4 members. Prize pool: ₹5,000.",
  seats: 100,
  fee: "₹100 per person",
 
}
];

// Display events as cards
function displayEvents() {
  const list = document.getElementById("event-list");
  const search = document
    .getElementById("search")
    .value.toLowerCase();

  const category = document
    .getElementById("category").value;

  const filtered = events.filter(event => {
    const matchesName =
      event.name.toLowerCase().includes(search);

    const matchesCategory =
      category === "All" ||
      event.category === category;

    return matchesName && matchesCategory;
  });

  list.innerHTML = "";

  if (filtered.length === 0) {
    list.innerHTML = "<p>No events found.</p>";
    return;
  }

  filtered.forEach(event => {
    const card = document.createElement("article");
    card.className = "event-card";

    card.innerHTML = `
      <h3>${event.name}</h3>
      <p><b>Category:</b> ${event.category}</p>
      <p>📅 ${event.date} · ${event.time}</p>
      <p>📍 ${event.venue}</p>
      <p>${event.description}</p>
      <p class="${event.seats === 0 ? "full" : ""}">
        ${event.seats === 0
          ? "FULL"
          : event.seats + " seats left"}
      </p>
      <button class="register-btn"
        ${event.seats === 0 ? "disabled" : ""}>
        ${event.seats === 0 ? "Event Full" : "Register"}
      </button>
    `;

    card.querySelector("button").addEventListener(
      "click",
      () => registerEvent(event)
    );

    list.appendChild(card);

animate(
  card,
  { opacity: [0, 1], y: [25, 0] },
  { duration: 0.5 }
);
  });
}

// Search and category filter
document.getElementById("search")
  .addEventListener("input", displayEvents);

document.getElementById("category")
  .addEventListener("change", displayEvents);

// Registration form
function registerEvent(event) {
  const name = prompt("Enter your full name:");
  if (name === null) return;

  if (name.trim().length < 2) {
    alert("Please enter your full name.");
    return;
  }

  const email = prompt("Enter your email address:");
  if (email === null) return;

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    alert("Please enter a valid email address.");
    return;
  }

  const phone = prompt("Enter your 10-digit mobile number:");
  if (phone === null) return;

  if (!/^[6-9]\d{9}$/.test(phone.trim())) {
    alert("Please enter a valid 10-digit mobile number.");
    return;
  }

  if (event.seats <= 0) {
    alert("Sorry, this event is full.");
    displayEvents();
    return;
  }

  event.seats--;

  alert(
    "Registration successful!\n\n" +
    "Name: " + name.trim() + "\n" +
    "Event: " + event.name
  );

  displayEvents();
}

// Initial display
displayEvents();