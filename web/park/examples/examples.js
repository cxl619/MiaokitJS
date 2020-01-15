
let Example = {
    // ���������ű�
    LoadScript: function (pFile, pCallback) {
        let pThis = this;
        let nTick = ++this.m_nTick;

        fetch(pFile)
            .then(pResponse => pResponse.text())
            .then(pText => {
                if (nTick === pThis.m_nTick) {
                    pThis.Load(pText);

                    if (pCallback) {
                        pCallback(pText);
                    }
                }
                else {
                    if (pCallback) {
                        pCallback(pText);
                    }
                }
            });
    },

    // ����������
    Load: function (pText) {
        if (!pText) {
            return;
        }

        eval(pText);
    },

    // ����������
    Start: function (Script) {
        if (!Script) {
            return;
        }

        if (this.m_pScript) {
            this.m_pScript.Destory();
            this.m_pScript = null;
        }

        this.m_pScript = new Script(MiaokitJS);
        this.m_pScript.Start();
    },

    // ֡��������
    Update: function () {
        if (this.m_pScript) {
            this.m_pScript.Update();
        }
    },

    /// ��������
    Destory: function () {
        if (this.m_pScript) {
            this.m_pScript.Destory();
            this.m_pScript = null;
        }
    },

    /// ��ǰ�����ű�����
    m_pScript: undefined,
    /// װ�ؼ���
    m_nTick: 0
};

function ExampleRun(Script) {
    Example.Start(Script);
}
