console.log("script loaded");
let data = [
  {
    id: 1,
    companyName: "Mobile First Corp",
    position: "React Native Developer",
    location: "remote",
    type: "full-time",
    salary: "$130,000 - $175,000",
    description:
      "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
    status: "not applied",
  },
  {
    id: 2,
    companyName: "WebFlow Agency",
    position: "Web Designer & Developer",
    location: "Los Angeles, CA",
    type: "Part-time",
    salary: "$80,000 - $120,000",
    description:
      "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.",
    status: "not applied",
  },
  {
    id: 3,
    companyName: "DataViz Solutions",
    position: "Data Visualization Specialist",
    location: "Boston, MA",
    type: "Full-time",
    salary: "$125,000 - $165,000",
    description:
      "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.",
    status: "not applied",
  },
  {
    id: 4,
    companyName: "CloudFirst Inc",
    position: "Backend Developer",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$140,000 - $190,000",
    description:
      "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.",
    status: "not applied",
  },
  {
    id: 5,
    companyName: "Innovation Labs",
    position: "UI/UX Engineer",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$110,000 - $150,000",
    description:
      "Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.",
    status: "not applied",
  },
  {
    id: 6,
    companyName: "MegaCorp Solutions",
    position: "JavaScript Developer",
    location: "New York, NY",
    type: "Full-time",
    salary: "$130,000 - $170,000",
    description:
      "Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.",
    status: "not applied",
  },
  {
    id: 7,
    companyName: "StartupXYZ",
    position: "Full Stack Engineer",
    location: "Remote",
    type: "Full-time",
    salary: "$120,000 - $160,000",
    description:
      "Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.",
    status: "not applied",
  },
  {
    id: 8,
    companyName: "TechCorp Industries",
    position: "Senior Frontend Developer",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$130,000 - $175,000",
    description:
      "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.",
    status: "not applied",
  },
];

// Task list
//
// - total job - count
//  Available Jobs ->
//   Click on interview button on content
//   - will add the data on Interview tab
//   - add the status as Interview.
//   - Will increase the the count of interview in Dashboard

// - Clicking on Rejected button on the card
//   - will add the data on Rejected tab
//   - add the status as Rejected.
//   - Will increase the the count of Rejected in Dashboard

// - Enable toggle between Interview and rejected button(you can select Rejected button after clicking on Interview, and Interview button after clicking on Rejected button). It will change the tab and dashboard count also. It will show tab wise jobs count on the right.
// No jobs Availble
// Check back soon for new Job Opportunities

// Get all DOOM Element

const jobList = document.getElementById("joblist");
const totalJob = document.getElementById("totaljobs");
const totalCount = document.getElementById("totalcount");
const interviewCount = document.getElementById("interviewcount");
const rejectCount = document.getElementById("rejectcount");

// for tracking tabs
let currentTab = "all";
const tabButtons = document.querySelectorAll(".jobfilter button");
// console.log(tabButtons);

// Update dashboard counts

function updateDashBoard() {
  const allJobCount = document.querySelectorAll(".singlejob");
  const visibleJobCount = Array.from(allJobCount).filter(
    (job) => job.style.display !== "none",
  );
  const interCount = document.querySelectorAll(
    ".status-btn.text-lime-600",
  ).length;
  console.log(interCount);
  const rejCount = document.querySelectorAll(".status-btn.text-red-600").length;

  totalJob.innerHTML = allJobCount.length;
  totalCount.innerHTML = `${visibleJobCount.length} Jobs`;
  interviewCount.innerHTML = interCount;
  rejectCount.innerHTML = rejCount;
}

// Current Tab Activation

function tabActivation() {
  const allJobs = document.querySelectorAll(".singlejob");
  let hasVisible = false;

  allJobs.forEach((singleJob) => {
    const statusText = singleJob
      .querySelector(".status-btn")
      .textContent.toLowerCase();

    if (currentTab === "all" || statusText === currentTab) {
      singleJob.style.display = "block";
      hasVisible = true;
    } else {
      singleJob.style.display = "none";
    }
    noJobCheck();
  });
}
// No Job Template
function noJobCheck() {
  // remove old empty message if exists
  const oldMsg = document.getElementById("nojobs");
  if (oldMsg) oldMsg.remove();

  const visiblejobs = [...document.querySelectorAll(".singlejob")].filter(
    (singleJob) => singleJob.style.display === "block",
  );

  // if no job visible → show message

  if (visiblejobs.length === 0) {
    const noJobTemplate = document.createElement("div");
    noJobTemplate.id = "nojobs";
    noJobTemplate.className =
      "bg-white rounded-xl p-12 flex flex-col items-center justify-center text-center gap-4";
    noJobTemplate.innerHTML = `<i class="fa-regular fa-file-lines text-6xl text-blue-500 "></i>

        <h3 class="text-2xl font-semibold text-gray-700">
          No jobs available
        </h3>

        <p class="text-gray-500">
          Check back soon for new job opportunities
        </p>`;
    jobList.appendChild(noJobTemplate);
  }
}

// filtering tabs

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    tabButtons.forEach((elm) => elm.classList.remove("active"));
    btn.classList.add("active");

    currentTab = btn.textContent.toLocaleLowerCase();

    tabActivation();
    updateDashBoard();
  });
});

// Rendering Single Jobs

function singleJobs() {
  // empty the joblist
  jobList.innerHTML = "";

  data.forEach((job) => {
    const div = document.createElement("div");
    div.className = "singlejob p-8 bg-white rounded-xl relative";

    div.innerHTML = `
    <h3 class="text-2xl font-semibold">${job.companyName}</h3>
    <h4 class="text-2xl font-light mt-2 mb-4 textcolor">${job.position}</h4>
    <ul class="flex gap-2 list-inside list-disc textcolor mb-4">
      <li>${job.location}</li>
      <li>${job.type}</li>
      <li>${job.salary}</li>
    </ul>

    <button
      class=" status-btn px-5 py-2.5 cursor-pointer bg-[#EEF4FF] rounded-lg text-[#002C5C]"
      type="button"
    >
      ${job.status.toUpperCase()}
    </button>

    <p class="mt-2.5 mb-6">
      ${job.description}
    </p>

    <div
      class=" flex gap-4 [&>button]:w-30 [&>button]:p-2.5 [&>button]:border [&>button]:cursor-pointer [&>button]:rounded-lg [&>button]:font-semibold [&>button]:capitalize"
    >
      <button class="interview-btn border-lime-500 text-lime-500" type="button">
        interview
      </button>

      <button class="reject-btn border-red-500 text-red-500" type="button">
        rejected
      </button>
    </div>

    <i
      class=" delete-btn absolute right-10 top-10 text-xl cursor-pointer fa-solid fa-trash-can"
    ></i>
  `;
    jobList.appendChild(div);
  });

  statusHandlers();
  tabActivation();
  updateDashBoard();
}

// handle status event on click on single job card

function statusHandlers() {
  const interviewBtn = document.querySelectorAll(".interview-btn");

  //   console.log(interviewBtn);

  interviewBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const jobCard = e.target.closest(".singlejob");

      const statusBtn = jobCard.querySelector(".status-btn");

      statusBtn.textContent = "INTERVIEW";
      statusBtn.className =
        "status-btn px-5 py-2.5 rounded-lg border border-lime-600 text-lime-600";

      tabActivation();
      updateDashBoard();
    });
  });

  const rejectBtn = document.querySelectorAll(".reject-btn");

  //   console.log(rejectBtn);

  rejectBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const jobCard = e.target.closest(".singlejob");

      const statusBtn = jobCard.querySelector(".status-btn");

      statusBtn.textContent = "REJECTED";
      statusBtn.className =
        "status-btn px-5 py-2.5 rounded-lg border border-red-600 text-red-600";
      tabActivation();
      updateDashBoard();
    });
  });

  document.querySelectorAll(".delete-btn").forEach((btn) => {
    btn.onclick = (e) => {
      const jobCard = e.target.closest(".singlejob");
      jobCard.remove();
      tabActivation();
      updateDashBoard();
    };
  });
}

//
singleJobs();
