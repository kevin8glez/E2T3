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
            panel1 = new Panel();
            irtenBotoia = new Button();
            SuspendLayout();
            // 
            // bidaliBotoia
            // 
            bidaliBotoia.BackColor = Color.FromArgb(128, 255, 128);
            bidaliBotoia.Location = new Point(657, 328);
            bidaliBotoia.Name = "bidaliBotoia";
            bidaliBotoia.Size = new Size(119, 38);
            bidaliBotoia.TabIndex = 0;
            bidaliBotoia.Text = "Bidali";
            bidaliBotoia.UseVisualStyleBackColor = false;
            // 
            // gureMezua
            // 
            gureMezua.Location = new Point(26, 328);
            gureMezua.Multiline = true;
            gureMezua.Name = "gureMezua";
            gureMezua.Size = new Size(625, 67);
            gureMezua.TabIndex = 1;
            gureMezua.TextChanged += gureMezua_TextChanged;
            // 
            // panel1
            // 
            panel1.Location = new Point(26, 26);
            panel1.Name = "panel1";
            panel1.Size = new Size(750, 268);
            panel1.TabIndex = 2;
            // 
            // irtenBotoia
            // 
            irtenBotoia.BackColor = Color.Red;
            irtenBotoia.Location = new Point(657, 388);
            irtenBotoia.Name = "irtenBotoia";
            irtenBotoia.Size = new Size(119, 38);
            irtenBotoia.TabIndex = 0;
            irtenBotoia.Text = "Irten";
            irtenBotoia.UseVisualStyleBackColor = false;
            irtenBotoia.Click += button1_Click;
            // 
            // Txata
            // 
            AutoScaleDimensions = new SizeF(8F, 20F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(800, 450);
            Controls.Add(irtenBotoia);
            Controls.Add(panel1);
            Controls.Add(gureMezua);
            Controls.Add(bidaliBotoia);
            Name = "Txata";
            Text = "Txata";
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private Button bidaliBotoia;
        private TextBox gureMezua;
        private Panel panel1;
        private Button irtenBotoia;
    }
}