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
            bidaliBotoia.Location = new Point(575, 246);
            bidaliBotoia.Margin = new Padding(3, 2, 3, 2);
            bidaliBotoia.Name = "bidaliBotoia";
            bidaliBotoia.Size = new Size(104, 28);
            bidaliBotoia.TabIndex = 0;
            bidaliBotoia.Text = "Bidali";
            bidaliBotoia.UseVisualStyleBackColor = false;
            // 
            // gureMezua
            // 
            gureMezua.Location = new Point(23, 246);
            gureMezua.Margin = new Padding(3, 2, 3, 2);
            gureMezua.Multiline = true;
            gureMezua.Name = "gureMezua";
            gureMezua.Size = new Size(547, 51);
            gureMezua.TabIndex = 1;
            gureMezua.TextChanged += gureMezua_TextChanged;
            // 
            // panel1
            // 
            panel1.BackColor = Color.FromArgb(224, 224, 224);
            panel1.BorderStyle = BorderStyle.FixedSingle;
            panel1.Location = new Point(23, 20);
            panel1.Margin = new Padding(3, 2, 3, 2);
            panel1.Name = "panel1";
            panel1.Size = new Size(656, 202);
            panel1.TabIndex = 2;
            // 
            // irtenBotoia
            // 
            irtenBotoia.BackColor = Color.Red;
            irtenBotoia.Location = new Point(575, 291);
            irtenBotoia.Margin = new Padding(3, 2, 3, 2);
            irtenBotoia.Name = "irtenBotoia";
            irtenBotoia.Size = new Size(104, 28);
            irtenBotoia.TabIndex = 0;
            irtenBotoia.Text = "Irten";
            irtenBotoia.UseVisualStyleBackColor = false;
            irtenBotoia.Click += button1_Click;
            // 
            // Txata
            // 
            AutoScaleDimensions = new SizeF(7F, 15F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(700, 338);
            Controls.Add(irtenBotoia);
            Controls.Add(panel1);
            Controls.Add(gureMezua);
            Controls.Add(bidaliBotoia);
            Margin = new Padding(3, 2, 3, 2);
            Name = "Txata";
            StartPosition = FormStartPosition.CenterScreen;
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