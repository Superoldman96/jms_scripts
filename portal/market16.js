// 退場位置がおかしい
function enter(pi) {
	pi.playPortalSE();
	pi.saveLocation("FREE_MARKET");
	pi.warp(910000000, "out00");
}
