"Use strict";

const books = [
  {
    id: 0,
    name: "Fundamentals of Cyber Security",
    image: "https://i.ibb.co/WD2qNdz/fundamentals-of-cyber-security-11.png",
    link: "https://shorturl.at/37XJS",
    description: " (CSC 301) The Cybersecurity School Manual is a comprehensive guide designed to equip students and professionals with the foundational knowledge and advanced skills necessary to navigate the dynamic field of cybersecurity. This manual offers a structured approach to understanding core cybersecurity principles, techniques, and best practices to protect systems, networks, and data.",
  },
  {
    id: 1,
    name: "Computer Programming in C",
    image: "https://i.ibb.co/mycxWGb/Computer-programming-in-c.png",
    link: "https://shorturl.at/JmjCR",
    description: "(CSC 214) A beginner-friendly guide to mastering the fundamentals of C programming. This manual covers essential topics such as data types, control structures, functions, arrays, pointers, and file handling. With practical examples, coding exercises, and real-world applications, it equips learners with the skills to write efficient and robust C programs. Perfect for students and professionals starting their programming journey.",
  },
  {
    id: 2,
    name: "Introduction to programming application",
    image: "https://i.ibb.co/Z6pDx1C/INTRODUCTION-TO-APPLICATION-PROGRAMME.png",
    link: "https://tinyurl.com/2phr6er9",
    description: "(CSC 312) A foundational guide to understanding programming concepts and their practical applications. This manual explores core topics such as algorithms, problem-solving techniques, and basic coding using languages like Python or Java. With hands-on projects and real-world examples, it prepares learners to design and implement simple software solutions. Ideal for beginners and those new to the world of programming.",
  },
  {
    id: 3,
    name: "Data Management I",
    image: "https://i.ibb.co/SPn81Fj/DATA-MANAGEMENT-1.png",
    link: "https://shorturl.at/pE61x",
    description: "(CSC 205) An introductory guide to the principles and practices of data management. This manual covers fundamental topics like data collection, organization, storage, and retrieval using database management systems. It includes practical exercises on relational databases, SQL, and data integrity, preparing learners to handle and process data efficiently. Perfect for beginners in data-driven fields.",
  },
  {
    id: 4,
    name: "Data Structure 2",
    image: "https://i.ibb.co/W0Mk6JH/Data-structures.png",
    link: "https://shorturl.at/dG4P3",
    description: "(CSC 304) An advanced guide to understanding and implementing complex data structures. This manual covers topics such as trees, graphs, heaps, and hash tables, along with algorithms for searching, sorting, and traversal. With hands-on coding exercises and real-world problem-solving examples, it equips learners to design efficient and optimized software solutions. Ideal for intermediate learners aiming to deepen their knowledge of data structures.",
  },
  {
    id: 5,
    name: "Object Oriented Programming",
    image: "https://i.ibb.co/kqHCRGB/Object-oriented-programming.png",
    link: "https://tinyurl.com/ptfxv8zt",
    description: "(CSC 315) A comprehensive guide to mastering object-oriented programming principles. This manual explores key concepts such as classes, objects, inheritance, polymorphism, encapsulation, and abstraction. It includes practical examples and projects using languages like Java or Python, helping learners design scalable and reusable software solutions. Perfect for students and professionals aiming to build robust, object-oriented applications.",
  },
  {
    id: 6,
    name: "Human Behaviour in organization",
    image: "https://i.ibb.co/6DJmkMt/Human-behaviour-organization.png",
    link: "https://shorturl.at/uka5u",
    description: "(FSC 211) A foundational guide to understanding how individuals and groups interact within organizational settings. This manual explores key topics like motivation, leadership, communication, team dynamics, and organizational culture. Through case studies and practical insights, learners gain tools to analyze and improve workplace behavior for enhanced productivity and collaboration. Ideal for students and professionals in management and organizational development.",
  },
  {
    id: 7,
    name: "Linear Algebra",
    image: "https://i.ibb.co/cg8zt1M/linear-algebra.png",
    link: "https://tinyurl.com/2fb73pte",
    description: "(CSC 312) An essential guide to the concepts and applications of linear algebra. This manual covers key topics such as vectors, matrices, determinants, eigenvalues, and linear transformations. It provides practical examples and exercises to help learners solve real-world problems in areas like computer graphics, engineering, and data science. Perfect for students and professionals seeking a solid foundation in linear algebra.",
  },
  {
    id: 8,
    name: "Data Management II",
    image: "https://i.ibb.co/986tznX/data-management-2.png",
    link: "https://tinyurl.com/2fb73pte",
    description: "(CSC 341) An advanced guide to data management principles, focusing on data analysis, data warehousing, and advanced database systems. This manual covers topics like normalization, indexing, query optimization, and big data technologies. It includes practical exercises and case studies to help learners manage and analyze complex datasets efficiently. Ideal for students and professionals seeking to enhance their data management skills for larger, more intricate systems.",
  },
  {
    id: 9,
    name: "Concept of electric circuit theory",
    image: "https://i.ibb.co/sCR8Fpv/concept-of-electric-circuit-theory.png",
    link: "https://res.cloudinary.com/dg7ziq6d1/image/upload/v1732012485/CSS_Course_Slides_rxhtig.pdf",
    description: "(CSC 221) An introductory guide to the fundamentals of electric circuit theory. This manual covers key topics such as Ohm's Law, Kirchhoff's laws, resistors, capacitors, inductors, and the analysis of AC and DC circuits. With practical examples and problem-solving exercises, it helps learners understand the behavior of electrical components and how to analyze and design circuits. Ideal for students pursuing electrical engineering or related fields.",
  },
];

const modal = document.querySelector(".modal");
const modalItem = document.querySelector(".modal-content");
const closeModalButton = document.querySelector(".close-modal");
const modalImage = document.getElementById("modal-image");
const modalDetails = document.querySelector(".modal-details");
const title = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalReadButton = document.getElementById("modal-read-button");
const modalDownloadButton = document.getElementById("modal-download-button");

function openModal(book) {
  modalImage.src = book.image;
  title.textContent = book.name;
  modalDescription.textContent = book.description;
  modalReadButton.href = book.link;
  modalDownloadButton.href = book.link;

  modal.style.display = "flex"
}

function closeModal() {
  modal.style.display = "none";
}

closeModalButton.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

// Update renderBooks to attach click events for the modal
function renderBooks(searchQuery = "") {
  const bookContainer = document.getElementById("book-container");
  bookContainer.innerHTML = ""; // Clear existing content

  books
    .filter((book) =>
      book.name.toLowerCase().includes(searchQuery.toLowerCase()) || book.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .forEach((book, index) => {
      const bookCard = document.createElement("div");
      bookCard.className = "book-card";
      book.id = `book-${index}`

      bookCard.innerHTML = `
        <img src="${book.image}" alt="${book.name}" />
        <div>
          <h3>${book.name}</h3>
          <p>${book.description}</p>
        </div>
      `;

      // Attach click event to open modal
      bookCard.addEventListener("click", () => openModal(book));

      bookContainer.appendChild(bookCard);
    });
}

// Initial rendering and search functionality
document.getElementById("search").addEventListener("input", (e) => {
  renderBooks(e.target.value);
});
document.addEventListener("DOMContentLoaded", () => renderBooks());
