
ExampleRun(function (MiaokitJS) {
    // ���嶥����������
    let aPosition = new Float32Array([
        // ����2�������εĶ�������
        -1.0, -1.0, -1.0, 1.0, -1.0, 1.0, -1.0, -1.0, 1.0,
        -1.0, -1.0, -1.0, 1.0, -1.0, -1.0, 1.0, -1.0, 1.0,
        // ����2�������εĶ�������
        -1.0, 1.0, -1.0, -1.0, 1.0, 1.0, 1.0, 1.0, 1.0,
        -1.0, 1.0, -1.0, 1.0, 1.0, 1.0, 1.0, 1.0, -1.0,
        // ����2�������εĶ�������
        -1.0, -1.0, -1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0,
        -1.0, -1.0, -1.0, 1.0, 1.0, -1.0, 1.0, -1.0, -1.0,
        // �Ҳ�2�������εĶ�������
        1.0, -1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0, 1.0,
        1.0, -1.0, -1.0, 1.0, 1.0, 1.0, 1.0, -1.0, 1.0,
        // ����2�������εĶ�������
        1.0, -1.0, 1.0, 1.0, 1.0, 1.0, -1.0, 1.0, 1.0,
        1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, -1.0, 1.0,
        // ���2�������εĶ�������
        -1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0, -1.0,
        -1.0, -1.0, 1.0, -1.0, 1.0, -1.0, -1.0, -1.0, -1.0
    ]);

    // ���嶥�㷨������
    let aNormal = new Float32Array([
        // ����2�������εĶ��㷨��
        0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0,
        0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0,
        // ����2�������εĶ��㷨��
        0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0,
        0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0,
        // ����2�������εĶ��㷨��
        0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0,
        0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0,
        // �Ҳ�2�������εĶ��㷨��
        1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0,
        1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0,
        // ����2�������εĶ��㷨��
        0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0,
        0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0,
        // ���2�������εĶ��㷨��
        -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0,
        -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0
    ]);

    // ���嶥��UV����
    let aUV = new Float32Array([
        // ����2�������εĶ���UV
        0.0, 0.0, 0.0, 1.0, 1.0, 1.0,
        0.0, 0.0, 1.0, 1.0, 1.0, 0.0,
        // ����2�������εĶ���UV
        0.0, 0.0, 0.0, 1.0, 1.0, 1.0,
        0.0, 0.0, 1.0, 1.0, 1.0, 0.0,
        // ����2�������εĶ���UV
        0.0, 0.0, 0.0, 1.0, 1.0, 1.0,
        0.0, 0.0, 1.0, 1.0, 1.0, 0.0,
        // �Ҳ�2�������εĶ���UV
        0.0, 0.0, 0.0, 1.0, 1.0, 1.0,
        0.0, 0.0, 1.0, 1.0, 1.0, 0.0,
        // ����2�������εĶ���UV
        0.0, 0.0, 0.0, 1.0, 1.0, 1.0,
        0.0, 0.0, 1.0, 1.0, 1.0, 0.0,
        // ���2�������εĶ���UV
        0.0, 0.0, 0.0, 1.0, 1.0, 1.0,
        0.0, 0.0, 1.0, 1.0, 1.0, 0.0
    ]);

    // ������������������
    let aIndex0 = new Int32Array([
        0, 1, 2, 3, 4, 5,
        6, 7, 8, 9, 10, 11
    ]);
    let aIndex1 = new Int32Array([
        12, 13, 14, 15, 16, 17,
        18, 19, 20, 21, 22, 23,
        24, 25, 26, 27, 28, 29,
        30, 31, 32, 33, 34, 35
    ]);


    // ��ʼ������
    this.Start = function () {
        // ������ͼ����
        this.m_pTexture = MiaokitJS.CreateTexture2D();
        this.m_pTexture.Load("./examples/data/image.jpg");

        this.m_pTexture2 = MiaokitJS.CreateTexture2D();
        this.m_pTexture2.Load("./examples/data/image2.jpg");

        // �������ʶ���
        this.m_pMaterial = MiaokitJS.CreateMaterial();
        this.m_pMaterial.SetTexture(this.m_pTexture);

        this.m_pMaterial2 = MiaokitJS.CreateMaterial();
        this.m_pMaterial2.SetTexture(this.m_pTexture2);

        // �������
        this.m_pMesh = MiaokitJS["CreateMesh"]();
        this.m_pMesh.position = aPosition;
        this.m_pMesh.normal = aNormal;
        this.m_pMesh.uv = aUV;
        this.m_pMesh.SetIndices(0, aIndex0, 4);
        this.m_pMesh.SetIndices(1, aIndex1, 4);

        this.m_pMesh.Apply();


        this.m_pMesh.SetMaterial(0, this.m_pMaterial);
        this.m_pMesh.SetMaterial(1, this.m_pMaterial2);

        this.m_pObject = MiaokitJS.CreateGameObject();
        this.m_pObject.SetMesh(this.m_pMesh);

        this.m_pTransform = this.m_pObject.GetTransform();
        this.m_nTick = 0;
    };

    // ֡���º���
    this.Update = function () {
        if (this.m_pTransform) {
            this.m_pTransform.SetEuler({ x: 0, y: this.m_nTick++ % 360, z: 0 });
            //this.m_nTick++;
        }
    };

    // ���ٺ���
    this.Destory = function () {
        console.log("δʵ������");
    };
});
