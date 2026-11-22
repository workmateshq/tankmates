// Tankmates settings you can change without touching the game code.
window.TANKMATES_CONFIG = {
  // Relay (TURN) server for players whose browsers can't connect directly, e.g. Firefox <-> Chrome,
  // phones on mobile data, or strict work networks. Set this to a URL that returns a JSON array of
  // RTCIceServer objects (relay logins).
  // Leave empty to use direct connections only.
  turnCredentialsUrl: '', // Metered removed (out of credits); a free Cloudflare relay is coming
};
