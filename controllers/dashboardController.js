const dashboardService = require("../services/dashboardService");

const getDashboard = async (req, res) => {
    try {
        const data = await dashboardService.getSummary();

        res.status(200).json({
            success: true,
            message: "Dashboard data fetched successfully",
            data
        });

    } catch (error) {
        console.error("Dashboard error:", error);

        res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
};

module.exports = {
    getDashboard
};