// ムラト

var npc_talk_status = -1;

function action(mode, type, selection) {
	if (mode != 1) {
		return cm.dispose();
	}

	npc_talk_status++;
	switch (npc_talk_status) {
		case 0:
			{
				// BB後
				var text = "いつでも入れるような所じゃないぞ…";
				return cm.sendOk(text);
			}
		default:
			break;
	}

	return cm.dispose();
}
