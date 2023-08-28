import express from "express";

const app = express();

// app.use(cors())

// app.use(express.static('public'))

app.use(express.json());

const router = express.Router();
function getRoot(req, res) {
    return res.json({
        code: 200,
        success: true,
    });
}
router.get("/", getRoot);

app.use(router);

const PORT = 8000;

app.listen(PORT, () => {
    console.log(`Server started successfully at ${PORT}`);
});
