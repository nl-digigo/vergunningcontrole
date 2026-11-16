namespace GenerateTestData
{
    partial class GenerateTestData
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
            groupBox1 = new GroupBox();
            _buttonSelectIFCFile = new Button();
            _textBoxIFCFile = new TextBox();
            groupBox2 = new GroupBox();
            _textBoxRandomLocations = new TextBox();
            label2 = new Label();
            _textBoxBBoxSize = new TextBox();
            label1 = new Label();
            _buttonSelectLocationsFile = new Button();
            _textBoxLocationsFile = new TextBox();
            groupBox3 = new GroupBox();
            _textBoxLog = new TextBox();
            _buttonRun = new Button();
            groupBox1.SuspendLayout();
            groupBox2.SuspendLayout();
            groupBox3.SuspendLayout();
            SuspendLayout();
            // 
            // groupBox1
            // 
            groupBox1.Controls.Add(_buttonSelectIFCFile);
            groupBox1.Controls.Add(_textBoxIFCFile);
            groupBox1.Location = new Point(8, 7);
            groupBox1.Name = "groupBox1";
            groupBox1.Size = new Size(516, 55);
            groupBox1.TabIndex = 0;
            groupBox1.TabStop = false;
            groupBox1.Text = "IFC Model";
            // 
            // _buttonSelectIFCFile
            // 
            _buttonSelectIFCFile.Location = new Point(456, 19);
            _buttonSelectIFCFile.Name = "_buttonSelectIFCFile";
            _buttonSelectIFCFile.Size = new Size(51, 25);
            _buttonSelectIFCFile.TabIndex = 1;
            _buttonSelectIFCFile.Text = "...";
            _buttonSelectIFCFile.UseVisualStyleBackColor = true;
            _buttonSelectIFCFile.Click += _buttonSelectIFCFile_Click;
            // 
            // _textBoxIFCFile
            // 
            _textBoxIFCFile.Location = new Point(9, 19);
            _textBoxIFCFile.Name = "_textBoxIFCFile";
            _textBoxIFCFile.ReadOnly = true;
            _textBoxIFCFile.Size = new Size(441, 23);
            _textBoxIFCFile.TabIndex = 0;
            // 
            // groupBox2
            // 
            groupBox2.Controls.Add(_textBoxRandomLocations);
            groupBox2.Controls.Add(label2);
            groupBox2.Controls.Add(_textBoxBBoxSize);
            groupBox2.Controls.Add(label1);
            groupBox2.Controls.Add(_buttonSelectLocationsFile);
            groupBox2.Controls.Add(_textBoxLocationsFile);
            groupBox2.Location = new Point(8, 68);
            groupBox2.Name = "groupBox2";
            groupBox2.Size = new Size(516, 86);
            groupBox2.TabIndex = 2;
            groupBox2.TabStop = false;
            groupBox2.Text = "Input";
            // 
            // _textBoxRandomLocations
            // 
            _textBoxRandomLocations.Location = new Point(374, 51);
            _textBoxRandomLocations.Name = "_textBoxRandomLocations";
            _textBoxRandomLocations.Size = new Size(76, 23);
            _textBoxRandomLocations.TabIndex = 5;
            _textBoxRandomLocations.Text = "10";
            // 
            // label2
            // 
            label2.AutoSize = true;
            label2.Location = new Point(214, 55);
            label2.Name = "label2";
            label2.Size = new Size(158, 15);
            label2.TabIndex = 4;
            label2.Text = "Select randomly N locations:";
            // 
            // _textBoxBBoxSize
            // 
            _textBoxBBoxSize.Location = new Point(69, 51);
            _textBoxBBoxSize.Name = "_textBoxBBoxSize";
            _textBoxBBoxSize.Size = new Size(76, 23);
            _textBoxBBoxSize.TabIndex = 3;
            _textBoxBBoxSize.Text = "400";
            // 
            // label1
            // 
            label1.AutoSize = true;
            label1.Location = new Point(5, 55);
            label1.Name = "label1";
            label1.Size = new Size(59, 15);
            label1.TabIndex = 2;
            label1.Text = "BBox Size:";
            // 
            // _buttonSelectLocationsFile
            // 
            _buttonSelectLocationsFile.Location = new Point(456, 19);
            _buttonSelectLocationsFile.Name = "_buttonSelectLocationsFile";
            _buttonSelectLocationsFile.Size = new Size(51, 25);
            _buttonSelectLocationsFile.TabIndex = 1;
            _buttonSelectLocationsFile.Text = "...";
            _buttonSelectLocationsFile.UseVisualStyleBackColor = true;
            _buttonSelectLocationsFile.Click += _buttonSelectLocationsFile_Click;
            // 
            // _textBoxLocationsFile
            // 
            _textBoxLocationsFile.Location = new Point(9, 19);
            _textBoxLocationsFile.Name = "_textBoxLocationsFile";
            _textBoxLocationsFile.ReadOnly = true;
            _textBoxLocationsFile.Size = new Size(441, 23);
            _textBoxLocationsFile.TabIndex = 0;
            // 
            // groupBox3
            // 
            groupBox3.Controls.Add(_textBoxLog);
            groupBox3.Location = new Point(9, 169);
            groupBox3.Name = "groupBox3";
            groupBox3.Size = new Size(514, 228);
            groupBox3.TabIndex = 3;
            groupBox3.TabStop = false;
            groupBox3.Text = "Log";
            // 
            // _textBoxLog
            // 
            _textBoxLog.Location = new Point(12, 20);
            _textBoxLog.Multiline = true;
            _textBoxLog.Name = "_textBoxLog";
            _textBoxLog.ReadOnly = true;
            _textBoxLog.ScrollBars = ScrollBars.Both;
            _textBoxLog.Size = new Size(490, 196);
            _textBoxLog.TabIndex = 0;
            // 
            // _buttonRun
            // 
            _buttonRun.Location = new Point(407, 403);
            _buttonRun.Name = "_buttonRun";
            _buttonRun.Size = new Size(115, 25);
            _buttonRun.TabIndex = 4;
            _buttonRun.Text = "Run";
            _buttonRun.UseVisualStyleBackColor = true;
            _buttonRun.Click += _buttonRun_Click;
            // 
            // GenerateTestData
            // 
            AutoScaleDimensions = new SizeF(7F, 15F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(534, 436);
            Controls.Add(_buttonRun);
            Controls.Add(groupBox3);
            Controls.Add(groupBox2);
            Controls.Add(groupBox1);
            MaximizeBox = false;
            MinimizeBox = false;
            Name = "GenerateTestData";
            StartPosition = FormStartPosition.CenterScreen;
            Text = "Generate Test Data";
            groupBox1.ResumeLayout(false);
            groupBox1.PerformLayout();
            groupBox2.ResumeLayout(false);
            groupBox2.PerformLayout();
            groupBox3.ResumeLayout(false);
            groupBox3.PerformLayout();
            ResumeLayout(false);
        }

        #endregion

        private GroupBox groupBox1;
        private TextBox _textBoxIFCFile;
        private Button _buttonSelectIFCFile;
        private GroupBox groupBox2;
        private Button _buttonSelectLocationsFile;
        private TextBox _textBoxLocationsFile;
        private Label label1;
        private TextBox _textBoxBBoxSize;
        private TextBox _textBoxRandomLocations;
        private Label label2;
        private GroupBox groupBox3;
        private TextBox _textBoxLog;
        private Button _buttonRun;
    }
}
