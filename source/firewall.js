// Firewall script to protect against common browser actions

document.addEventListener("DOMContentLoaded", () => {
  // Disable right-click context menu
  document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    alert("Right-click is disabled for security reasons.");
  });

  // Disable copy, cut, paste (except in form inputs)
  const handleClipboard = (e) => {
    const target = e.target;
    if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") {
      return; // Allow in form fields
    }
    e.preventDefault();
    alert(
      `${e.type.charAt(0).toUpperCase() + e.type.slice(1)}ing is disabled.`
    );
  };

  document.addEventListener("copy", handleClipboard);
  document.addEventListener("cut", handleClipboard);
  document.addEventListener("paste", handleClipboard);

  // Disable inspect element and view source keys
  document.addEventListener("keydown", (e) => {
    // Disable F12
    if (e.key === "F12") {
      e.preventDefault();
      alert("Inspect Element is disabled.");
    }

    // Disable Ctrl+Shift+I (Inspect)
    if (e.ctrlKey && e.shiftKey && e.key === "I") {
      e.preventDefault();
      alert("Inspect Element is disabled.");
    }

    // Disable Ctrl+Shift+J (Console)
    if (e.ctrlKey && e.shiftKey && e.key === "J") {
      e.preventDefault();
      alert("Console is disabled.");
    }

    // Disable Ctrl+U (View Source)
    if (e.ctrlKey && e.key === "u") {
      e.preventDefault();
      alert("View Source is disabled.");
    }

    // Disable Ctrl+S (Save Page)
    if (e.ctrlKey && e.key === "s") {
      e.preventDefault();
      alert("Saving page is disabled.");
    }

    // Disable Ctrl+P (Print)
    if (e.ctrlKey && e.key === "p") {
      e.preventDefault();
      alert("Printing is disabled.");
    }
  });

  // Disable drag and drop
  document.addEventListener("dragstart", (e) => {
    e.preventDefault();
  });

  // Text selection is allowed on the entire site
});
