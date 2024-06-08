/* ==================== AUTH CONTROLLERS ==================== */
/* In the controllers should not be any direct request to the db */

/* ========== Importing models ========== */

/* ========== Functions ========== */
function login(req, res) {
  res.render("auth/login", {});
}

function register(req, res) {
  res.render("auth/register", {});
}

/* ========== Exporting models ========== */
export { login, register };
