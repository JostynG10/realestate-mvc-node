/* ==================== AUTH CONTROLLERS ==================== */
/* In the controllers should not be any direct request to the db */

/* ========== Importing models ========== */

/* ========== Functions ========== */
function login(req, res) {
  res.render("auth/login", { authenticated: false });
}

/* ========== Exporting models ========== */
export { login };
