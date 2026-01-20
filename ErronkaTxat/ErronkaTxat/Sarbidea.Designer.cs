namespace erronkaTxat
{
    partial class Sarbidea
    {
        /// <summary>
        ///  Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        ///  Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        ///  Required method for Designer support - do not modify
        ///  the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            sartuBotoia = new Button();
            erabiltzaileEtiketa = new Label();
            pasahitzaEtiketa = new Label();
            erabTextBox = new TextBox();
            pasaTextbox = new TextBox();
            label1 = new Label();
            SuspendLayout();
            // 
            // sartuBotoia
            // 
            sartuBotoia.Location = new Point(266, 321);
            sartuBotoia.Name = "sartuBotoia";
            sartuBotoia.Size = new Size(95, 38);
            sartuBotoia.TabIndex = 0;
            sartuBotoia.Text = "Sartu";
            sartuBotoia.UseVisualStyleBackColor = true;
            sartuBotoia.Click += sartuBotoia_Click;
            // 
            // erabiltzaileEtiketa
            // 
            erabiltzaileEtiketa.AutoSize = true;
            erabiltzaileEtiketa.Location = new Point(173, 177);
            erabiltzaileEtiketa.Name = "erabiltzaileEtiketa";
            erabiltzaileEtiketa.Size = new Size(69, 15);
            erabiltzaileEtiketa.TabIndex = 1;
            erabiltzaileEtiketa.Text = "Erabiltzailea";
            // 
            // pasahitzaEtiketa
            // 
            pasahitzaEtiketa.AutoSize = true;
            pasahitzaEtiketa.Location = new Point(173, 224);
            pasahitzaEtiketa.Name = "pasahitzaEtiketa";
            pasahitzaEtiketa.Size = new Size(56, 15);
            pasahitzaEtiketa.TabIndex = 2;
            pasahitzaEtiketa.Text = "Pasahitza";
            pasahitzaEtiketa.Click += label2_Click;
            // 
            // erabTextBox
            // 
            erabTextBox.Location = new Point(296, 174);
            erabTextBox.Name = "erabTextBox";
            erabTextBox.Size = new Size(163, 23);
            erabTextBox.TabIndex = 3;
            erabTextBox.TextChanged += textBox1_TextChanged;
            // 
            // pasaTextbox
            // 
            pasaTextbox.Location = new Point(296, 221);
            pasaTextbox.Name = "pasaTextbox";
            pasaTextbox.Size = new Size(163, 23);
            pasaTextbox.TabIndex = 4;
            // 
            // label1
            // 
            label1.AutoSize = true;
            label1.Font = new Font("Segoe UI", 15F);
            label1.Location = new Point(226, 60);
            label1.Name = "label1";
            label1.Size = new Size(190, 28);
            label1.TabIndex = 5;
            label1.Text = "Ileapaindegiko Txata";
            // 
            // Sarbidea
            // 
            AutoScaleDimensions = new SizeF(7F, 15F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(625, 450);
            Controls.Add(label1);
            Controls.Add(pasaTextbox);
            Controls.Add(erabTextBox);
            Controls.Add(pasahitzaEtiketa);
            Controls.Add(erabiltzaileEtiketa);
            Controls.Add(sartuBotoia);
            Name = "Sarbidea";
            Text = "Ileapaindegiko Txata";
            Load += Sarbidea_Load;
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private Button sartuBotoia;
        private Label erabiltzaileEtiketa;
        private Label pasahitzaEtiketa;
        private TextBox erabTextBox;
        private TextBox pasaTextbox;
        private Label label1;
    }
}
