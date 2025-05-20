function addTask() {
  const taskInput = document.getElementById("taskInput");
  const timeInput = document.getElementById("timeInput");
  const task = taskInput.value.trim();
  const time = timeInput.value;

  if (task === "" || time === "") {
    alert("Please enter both task and time.");
    return;
  }

  const list = document.getElementById("taskList");
  const li = document.createElement("li");

  const formattedTime = formatTime(time);

  li.innerHTML = `🕒 <strong>${task}</strong> at <span class="task-time">${formattedTime}</span>`;
  li.style.backgroundColor = getRandomColor();
  li.style.color = "#fff";
  li.style.borderRadius = "8px";
  li.style.margin = "5px 0";

  list.appendChild(li);

  taskInput.value = "";
  timeInput.value = "";
}

function formatTime(time24) {
  const [hourStr, minute] = time24.split(":");
  let hour = parseInt(hourStr);
  const ampm = hour >= 12 ? "PM" : "AM";
  hour = hour % 12 || 12;
  return `${hour}:${minute} ${ampm}`;
}

function getRandomColor() {
  const colors = ["#FF6B6B", "#6BCB77", "#4D96FF", "#FFD93D", "#845EC2"];
  return colors[Math.floor(Math.random() * colors.length)];
}
