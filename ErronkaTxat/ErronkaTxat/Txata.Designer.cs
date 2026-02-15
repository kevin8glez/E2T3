namespace ErronkaTxat
{
    partial class Txata
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
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
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            bidaliBotoia = new Button();
            gureMezua = new TextBox();
            irtenBotoia = new Button();
            txatPanela = new ListBox();
            erabiltzailea = new Label();
            SuspendLayout();
            // 
            // bidaliBotoia
            // 
            bidaliBotoia.BackColor = Color.FromArgb(128, 255, 128);
            bidaliBotoia.Location = new Point(657, 340);
            bidaliBotoia.Name = "bidaliBotoia";
            bidaliBotoia.Size = new Size(119, 37);
            bidaliBotoia.TabIndex = 0;
            bidaliBotoia.Text = "Bidali";
            bidaliBotoia.UseVisualStyleBackColor = false;
            bidaliBotoia.Click += bidaliBotoia_Click;
            // 
            // gureMezua
            // 
            gureMezua.Location = new Point(26, 340);
            gureMezua.Multiline = true;
            gureMezua.Name = "gureMezua";
            gureMezua.Size = new Size(625, 67);
            gureMezua.TabIndex = 1;
            gureMezua.TextChanged += gureMezua_TextChanged;
            // 
            // irtenBotoia
            // 
            irtenBotoia.BackColor = Color.Red;
            irtenBotoia.Location = new Point(657, 400);
            irtenBotoia.Name = "irtenBotoia";
            irtenBotoia.Size = new Size(119, 37);
            irtenBotoia.TabIndex = 0;
            irtenBotoia.Text = "Irten";
            irtenBotoia.UseVisualStyleBackColor = false;
            irtenBotoia.Click += TxataItxi;
            // 
            // txatPanela
            // 
            txatPanela.FormattingEnabled = true;
            txatPanela.Location = new Point(26, 36);
            txatPanela.Name = "txatPanela";
            txatPanela.Size = new Size(750, 284);
            txatPanela.TabIndex = 2;
            //txatPanela.SelectedIndexChanged += txatPanela_SelectedIndexChanged;
            // 
            // erabiltzailea
            // 
            erabiltzailea.AutoSize = true;
            erabiltzailea.Location = new Point(726, 9);
            erabiltzailea.Name = "erabiltzailea";
            erabiltzailea.Size = new Size(50, 20);
            erabiltzailea.TabIndex = 3;
            erabiltzailea.Text = "label1";
            // 
            // Txata
            // 
            AutoScaleDimensions = new SizeF(8F, 20F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(800, 451);
            Controls.Add(erabiltzailea);
            Controls.Add(txatPanela);
            Controls.Add(irtenBotoia);
            Controls.Add(gureMezua);
            Controls.Add(bidaliBotoia);
            Name = "Txata";
            StartPosition = FormStartPosition.CenterScreen;
            Text = "Txata";
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private Button bidaliBotoia;
        private TextBox gureMezua;
        private Button irtenBotoia;
        private ListBox txatPanela;
        private Label erabiltzailea;
    }
}