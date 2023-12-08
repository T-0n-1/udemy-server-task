import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send(`
        <h1>Hello World</h1>
        <ul>
            <li><a href="/about">About Me</a></li>
            <li><a href="/contact">Contact information</a></li>
        </ul>
        `)
});
app.get("/about", (req, res) => {
    res.send(`
        <h1>About Me</h1>
        <ul>
            <li><a href="/contact">Contact information</a></li>
            <li><a href="/">Back</a></li>
        </ul>
        `)
});
app.get("/contact", (req, res) => {
    res.send(`
        <h1>Contact Me</h1>
        <ul>
            <li><a href="/about">About Me</a></li>
            <li><a href="/">Back</a></li>
        </ul>
        `)
});

app.listen(port, () => {    
    console.log(`Server running on port ${port}`);
});