const authorizeRoles = (...allowedRoles) => {
    return (req, res, next) => {

        if (!req.user || !req.user.role) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized. User not authenticated"
            });
        }

        const userRole = req.user.role;

        if (!allowedRoles.includes(userRole)) {
            return res.status(403).json({
                success: false,
                message: `Role '${userRole}' not allowed to access this resource`
            });
        }

        next();
    };
};

module.exports = authorizeRoles;