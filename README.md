Gen AI Data Query Dashboard – Description
This React-based dashboard prototype is designed to simulate the interaction between users and the Gen AI Analytics tool. It allows non-technical users to input natural language queries, fetch mock data insights, and visualize results using charts.

Key Features & Functionality
1. Query Input Field (AI-Powered Suggestions)
Users can type business-related queries in a text input field.

The query is processed upon clicking the Submit Query button.

2. Query Processing Simulation
On query submission, a loading indicator appears to simulate processing.

The result is displayed using mock data (categories A, B, C).

3. Result Display with Visualization
Data is visualized using Chart.js, showcasing structured insights.

The chart dynamically updates based on the query result.

4. Query History Section
Stores previous queries in the Redux state for reference.

Displays past queries in a simple list format.

5. State Management with Redux
Actions & Reducers handle query submissions and store results.

Global state keeps track of loading, error, and data states.

Technology Stack
Component	Technology Used
Frontend	React.js
State Mgmt	Redux Toolkit
Styling	Material-UI / Tailwind CSS
Charts	Chart.js
Future Enhancements
AI-powered query suggestions for better UX.

Live database connectivity to fetch real-time data.

More advanced visualizations (Pie Charts, Heatmaps, etc.).
