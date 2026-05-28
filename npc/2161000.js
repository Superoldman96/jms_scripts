/*
	map id : 211070100, 謁見室
	ヴァンレオン召喚
*/
var npc_talk_status = -1;
function action(mode, type, selection) {
	if (mode != 1) {
		return cm.dispose();
	}

	npc_talk_status++;
	switch (npc_talk_status) {
		case 0:
			{
				// typo.
				var text = "私を倒しに来た勇士たちか…暗黒の魔法使いたちを敵対する者か…どちらでも構わない。お互いの目的さえ明確であればこれ以上語る必要なないはずだ…\r\n"
				text += "かかってこい。愚かな奴らよ…\r\n";
				return cm.askAcceptDecline(text);
			}
		case 1:
			{
				cm.spawnBossAtNPC(8840010, 6, -183,-1);
				cm.removeNpc(211070100, 2161000);
				return cm.dispose();
			}
		default:
			break;
	}

	return cm.dispose();
}