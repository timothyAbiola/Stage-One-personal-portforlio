document.addEventListener("DOMContentLoaded", () => {
  const currentTimeUTC = document.querySelector(
    '[data-testid="currentTimeUTC"]'
  );
  const currentDay = document.querySelector('[data-testid="currentDay"]');

  const updateDateAndTime = () => {
    const now = new Date();
    currentTimeUTC.textContent = `Current Time (UTC): ${now
      .toISOString()
      .slice(11, 19)}`;
    currentDay.textContent = `Current Day: ${now.toLocaleDateString("en-US", {
      weekday: "long",
    })}`;
  };

  setInterval(updateDateAndTime, 1000);
  updateDateAndTime();
});
