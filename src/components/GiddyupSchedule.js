import React from "react";

export default function GiddyUpSchedule() {
  const fallSessions = [
    { date: "Sept 9", program: "Horse Fun" },
    { date: "Sept 23", program: "Outdoor Fun" },
    { date: "Oct 7", program: "Horse Fun" },
    { date: "Oct 14", program: "Outdoor Fun" },
    { date: "Nov 4", program: "Horse Fun" },
    { date: "Nov 18", program: "Outdoor Fun" },
    { date: "Dec 2", program: "Horse Fun" },
    { date: "Dec 16", program: "Outdoor Fun" },
  ];

  const winterSpringSessions = [
    { date: "Jan 6", program: "Horse Fun" },
    { date: "Feb 10", program: "Horse Fun" },
    { date: "Feb 24", program: "Outdoor Fun" },
    { date: "Mar 10", program: "Horse Fun" },
    { date: "Mar 24", program: "Outdoor Fun" },
    { date: "Apr 14", program: "Horse Fun" },
    { date: "Apr 28", program: "Outdoor Fun" },
    { date: "May 12", program: "Horse Fun" },
    { date: "May 26", program: "Outdoor Fun" },
  ];

  const rowCount = Math.max(fallSessions.length, winterSpringSessions.length);

  const rows = [];
  for (let i = 0; i < rowCount; i++) {
    const fall = fallSessions[i];
    const winterSpring = winterSpringSessions[i];

    rows.push(
      React.createElement(
        "tr",
        { key: i, className: i % 2 === 0 ? "bg-white" : "bg-gray-50" },
        React.createElement(
          "td",
          {
            className: "px-4 py-2 font-medium text-gray-700 whitespace-nowrap",
          },
          fall ? fall.date : "",
        ),
        React.createElement(
          "td",
          { className: "px-4 py-2 text-gray-600" },
          fall ? fall.program : "",
        ),
        React.createElement(
          "td",
          {
            className:
              "px-4 py-2 border-l border-gray-200 font-medium text-gray-700 whitespace-nowrap",
          },
          winterSpring ? winterSpring.date : "",
        ),
        React.createElement(
          "td",
          { className: "px-4 py-2 text-gray-600" },
          winterSpring ? winterSpring.program : "",
        ),
      ),
    );
  }

  return React.createElement(
    "div",
    { className: "w-full max-w-4xl mx-auto px-4 py-8" },
    React.createElement(
      "h2",
      { className: "text-2xl font-bold text-center mb-6" },
      "GiddyUp Program Schedule",
    ),
    React.createElement(
      "div",
      {
        className:
          "overflow-x-auto rounded-lg border border-gray-200 shadow-sm",
      },
      React.createElement(
        "table",
        { className: "w-full border-collapse text-sm sm:text-base" },
        React.createElement(
          "thead",
          null,
          React.createElement(
            "tr",
            { className: "bg-gray-100" },
            React.createElement(
              "th",
              {
                colSpan: 2,
                className:
                  "border-b border-gray-200 px-4 py-3 text-left font-semibold",
              },
              "Fall Sessions",
            ),
            React.createElement(
              "th",
              {
                colSpan: 2,
                className:
                  "border-b border-l border-gray-200 px-4 py-3 text-left font-semibold",
              },
              "Winter & Spring Sessions",
            ),
          ),
        ),
        React.createElement("tbody", null, rows),
      ),
    ),
  );
}
