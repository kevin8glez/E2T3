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
            SuspendLayout();
            // 
            // bidaliBotoia
            // 
            bidaliBotoia.Location = new Point(657, 360);
            bidaliBotoia.Name = "bidaliBotoia";
            bidaliBotoia.Size = new Size(119, 38);
            bidaliBotoia.TabIndex = 0;
            bidaliBotoia.Text = "Bidali";
            bidaliBotoia.UseVisualStyleBackColor = true;
            // 
            // gureMezua
            // 
            gureMezua.Location = new Point(26, 360);
            gureMezua.Multiline = true;
            gureMezua.Name = "gureMezua";
            gureMezua.Size = new Size(625, 49);
            gureMezua.TabIndex = 1;
            gureMezua.TextChanged += textBox1_TextChanged;
            // 
            // panel1
            // 
            panel1.Location = new Point(26, 26);
            panel1.Name = "panel1";
            panel1.Size = new Size(750, 309);
            panel1.TabIndex = 2;
            // 
            // Txata
            // 
            AutoScaleDimensions = new SizeF(8F, 20F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(800, 450);
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
    }
}