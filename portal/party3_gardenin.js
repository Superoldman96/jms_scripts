function enter(pi) {
	if (pi.getPlayer().getParty() != null && pi.isLeader() || pi.getLeaderMapId() == 920010100) {
		pi.warp(920010100);
		pi.playPortalSE();
	} else {
		pi.playerMessage(5, "ｶ､ｪX･h､~ｯ爭X･h");
	}
}
