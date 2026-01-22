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
            erabTextBox = new TextBox();
            label1 = new Label();
            SuspendLayout();
            // 
            // sartuBotoia
            // 
            sartuBotoia.Location = new Point(199, 246);
            sartuBotoia.Margin = new Padding(3, 4, 3, 4);
            sartuBotoia.Name = "sartuBotoia";
            sartuBotoia.Size = new Size(109, 51);
            sartuBotoia.TabIndex = 0;
            sartuBotoia.Text = "Sartu";
            sartuBotoia.UseVisualStyleBackColor = true;
            sartuBotoia.Click += sartuBotoia_Click;
            // 
            // erabiltzaileEtiketa
            // 
            erabiltzaileEtiketa.AutoSize = true;
            erabiltzaileEtiketa.Location = new Point(113, 167);
            erabiltzaileEtiketa.Name = "erabiltzaileEtiketa";
            erabiltzaileEtiketa.Size = new Size(91, 20);
            erabiltzaileEtiketa.TabIndex = 1;
            erabiltzaileEtiketa.Text = "Erabiltzailea";
            // 
            // erabTextBox
            // 
            erabTextBox.Location = new Point(234, 164);
            erabTextBox.Margin = new Padding(3, 4, 3, 4);
            erabTextBox.Name = "erabTextBox";
            erabTextBox.Size = new Size(186, 27);
            erabTextBox.TabIndex = 3;
            erabTextBox.TextChanged += textBox1_TextChanged;
            // 
            // label1
            // 
            label1.AutoSize = true;
            label1.Font = new Font("Segoe UI", 15F);
            label1.Location = new Point(137, 60);
            label1.Name = "label1";
            label1.Size = new Size(241, 35);
            label1.TabIndex = 5;
            label1.Text = "Ileapaindegiko Txata";
            // 
            // Sarbidea
            // 
            AutoScaleDimensions = new SizeF(8F, 20F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(514, 376);
            Controls.Add(label1);
            Controls.Add(erabTextBox);
            Controls.Add(erabiltzaileEtiketa);
            Controls.Add(sartuBotoia);
            Margin = new Padding(3, 4, 3, 4);
            Name = "Sarbidea";
            Text = "Ileapaindegiko Txata";
            Load += Sarbidea_Load;
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private Button sartuBotoia;
        private Label erabiltzaileEtiketa;
        private TextBox erabTextBox;
        private Label label1;
    }
}
