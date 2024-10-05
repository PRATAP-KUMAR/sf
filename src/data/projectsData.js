const projectsData = [
  {
    id: 5,
    name: "News App",
    about:
      'It is a full stack app - from this app, you can search for news and top headlines from GNews API.',
    techs: [
      "ExpressJS",
      "ReactJS",
      "NodeJS",
      "REST API",
      "Tailwind CSS",
      "Netlify",
      "Firebase"
    ],
    source: "https://github.com/PRATAP-KUMAR/news-app-front-end",
    liveLink: "https://pratap-panabaka-news.web.app/",
  },
  {
    id: 4,
    name: "Expenses and Contacts App",
    about:
      'It is a full stack app.' + ' ' +
      'Users have to configure PostgreSQL on their systems to run the server.' + ' ' +
      'Users can signup and start to save, edit and delete their daily expenses and important contacts.' + ' ' +
      'All the data is stored in users configured database. Deleted expenses and contacts are stored in a seperate table such that users dont loose' + ' ' +
      'any data once they added.',
    techs: [
      "PostgreSQL",
      "ExpressJS",
      "ReactJS",
      "NodeJS",
      "PERN Stack",
      "JWT",
      "REST API",
      "Tailwind CSS",
      "Netlify",
    ],
    source: "https://github.com/PRATAP-KUMAR/expenses-app-front-end/",
    liveLink: "https://pratap-panabaka-expenses-app.netlify.app/",
  },
  {
    id: 3,
    name: "Product App",
    about:
      'It is a full stack app where users can list products, add product and delete products.' + ' ' +
      "This App's Frontend is built with ReactJS and Backend with PHP.",
    techs: [
      "ReactJS",
      "REST API",
      "PHP",
      "MySQL",
      "Tailwind CSS",
      "Netlify",
      "Hostinger"
    ],
    source: "https://github.com/PRATAP-KUMAR/products-app-fullstack-frontend",
    liveLink: "https://pratap-panabaka-products-app.netlify.app/",
  },
  {
    id: 2,
    name: "Metrics Web App",
    about:
      'It is a frontend app to check a list of metrics (numeric values).' + ' ' +
      "The metric data is from the free API website https://www.mfapi.in. " +
      "This API gives historical data for up to 10 years.",
    techs: [
      "ReactJS",
      "REST API",
      "ContextAPI",
      "Tailwind CSS",
      "Netlify",
    ],
    source: "https://github.com/PRATAP-KUMAR/metrics-web-app",
    liveLink: "https://pratap-panabaka-metrics-web-app.netlify.app/",
  },

  {
    id: 1,
    name: "Gnome Shell Extensions",
    about:
      'GNOME Shell extensions are a small portion of code written by third-party developers that modify how GNOME works' + ' ' +
      "(If you are familiar with Chrome Extensions or Firefox Addons, GNOME Shell extensions are similar to them).",
    techs: [
      "GJS (GNOME JavaScript)",
      "Object Oriented Programming",
      "Linux",
      "Open Source"
    ],
    source:
      "https://github.com/PRATAP-KUMAR/Bring-Out-Submenu-of-Power-Off-Logout/",
    liveLink: "https://extensions.gnome.org/accounts/profile/PRATAP",
  },
];

export default projectsData;
