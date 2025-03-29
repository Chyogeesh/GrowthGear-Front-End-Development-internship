import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitQuery } from "./redux/actions";
import { Chart } from "react-chartjs-2";
import { TextField, Button, CircularProgress, Container, Typography } from "@mui/material";

const Dashboard = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const { loading, error, data, history } = useSelector((state) => state.query);

    const handleQuerySubmit = () => {
        dispatch(submitQuery(query));
    };

    return (
        <Container maxWidth="md" className="p-5">
            <Typography variant="h4" className="mb-4">Gen AI Data Query Dashboard</Typography>
            <TextField 
                label="Ask a business question..." 
                variant="outlined" 
                fullWidth 
                value={query} 
                onChange={(e) => setQuery(e.target.value)} 
                className="mb-4"
            />
            <Button variant="contained" color="primary" onClick={handleQuerySubmit}>
                Submit Query
            </Button>

            {loading && <CircularProgress className="mt-4" />}
            {error && <Typography color="error">{error}</Typography>}

            {data && (
                <div className="mt-4">
                    <Typography variant="h6">Query Results:</Typography>
                    <Chart
                        type="bar"
                        data={{
                            labels: ["Category A", "Category B", "Category C"],
                            datasets: [{
                                label: "Mock Data",
                                data: [data.a, data.b, data.c],
                                backgroundColor: "rgba(75,192,192,0.4)",
                            }],
                        }}
                    />
                </div>
            )}

            <div className="mt-4">
                <Typography variant="h6">Query History:</Typography>
                <ul>
                    {history.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </Container>
    );
};

export default Dashboard;
