namespace TestVNGPortal
{
    partial class TestVNGPortalForm
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
            _buttonRun = new Button();
            groupBox1 = new GroupBox();
            _textBoxLog = new TextBox();
            groupBox2 = new GroupBox();
            _buttonSelectIFCModelsFolder = new Button();
            _textBoxIFCModelsFolder = new TextBox();
            _textBoxWorkflowsFolder = new TextBox();
            groupBox3 = new GroupBox();
            _buttonSelectWorkflowsFolder = new Button();
            groupBox4 = new GroupBox();
            _comboBoxWorkflows = new ComboBox();
            groupBox1.SuspendLayout();
            groupBox2.SuspendLayout();
            groupBox3.SuspendLayout();
            groupBox4.SuspendLayout();
            SuspendLayout();
            // 
            // _buttonRun
            // 
            _buttonRun.Enabled = false;
            _buttonRun.Location = new Point(620, 463);
            _buttonRun.Name = "_buttonRun";
            _buttonRun.Size = new Size(75, 23);
            _buttonRun.TabIndex = 0;
            _buttonRun.Text = "Run";
            _buttonRun.UseVisualStyleBackColor = true;
            _buttonRun.Click += _buttonRun_Click;
            // 
            // groupBox1
            // 
            groupBox1.Controls.Add(_textBoxLog);
            groupBox1.Location = new Point(12, 188);
            groupBox1.Name = "groupBox1";
            groupBox1.Size = new Size(681, 268);
            groupBox1.TabIndex = 1;
            groupBox1.TabStop = false;
            groupBox1.Text = "Log";
            // 
            // _textBoxLog
            // 
            _textBoxLog.Location = new Point(6, 19);
            _textBoxLog.Multiline = true;
            _textBoxLog.Name = "_textBoxLog";
            _textBoxLog.ReadOnly = true;
            _textBoxLog.ScrollBars = ScrollBars.Both;
            _textBoxLog.Size = new Size(669, 237);
            _textBoxLog.TabIndex = 0;
            // 
            // groupBox2
            // 
            groupBox2.Controls.Add(_buttonSelectIFCModelsFolder);
            groupBox2.Controls.Add(_textBoxIFCModelsFolder);
            groupBox2.Location = new Point(12, 11);
            groupBox2.Name = "groupBox2";
            groupBox2.Size = new Size(681, 54);
            groupBox2.TabIndex = 2;
            groupBox2.TabStop = false;
            groupBox2.Text = "IFC Models folder";
            // 
            // _buttonSelectIFCModelsFolder
            // 
            _buttonSelectIFCModelsFolder.Location = new Point(646, 19);
            _buttonSelectIFCModelsFolder.Name = "_buttonSelectIFCModelsFolder";
            _buttonSelectIFCModelsFolder.Size = new Size(29, 23);
            _buttonSelectIFCModelsFolder.TabIndex = 1;
            _buttonSelectIFCModelsFolder.Text = "...";
            _buttonSelectIFCModelsFolder.UseVisualStyleBackColor = true;
            _buttonSelectIFCModelsFolder.Click += _buttonSelectIFCModelsFolder_Click;
            // 
            // _textBoxIFCModelsFolder
            // 
            _textBoxIFCModelsFolder.Location = new Point(9, 19);
            _textBoxIFCModelsFolder.Name = "_textBoxIFCModelsFolder";
            _textBoxIFCModelsFolder.ReadOnly = true;
            _textBoxIFCModelsFolder.Size = new Size(631, 23);
            _textBoxIFCModelsFolder.TabIndex = 0;
            // 
            // _textBoxWorkflowsFolder
            // 
            _textBoxWorkflowsFolder.Location = new Point(9, 19);
            _textBoxWorkflowsFolder.Name = "_textBoxWorkflowsFolder";
            _textBoxWorkflowsFolder.ReadOnly = true;
            _textBoxWorkflowsFolder.Size = new Size(631, 23);
            _textBoxWorkflowsFolder.TabIndex = 0;
            // 
            // groupBox3
            // 
            groupBox3.Controls.Add(_buttonSelectWorkflowsFolder);
            groupBox3.Controls.Add(_textBoxWorkflowsFolder);
            groupBox3.Location = new Point(12, 69);
            groupBox3.Name = "groupBox3";
            groupBox3.Size = new Size(681, 54);
            groupBox3.TabIndex = 3;
            groupBox3.TabStop = false;
            groupBox3.Text = "Workflows folder";
            // 
            // _buttonSelectWorkflowsFolder
            // 
            _buttonSelectWorkflowsFolder.Location = new Point(646, 19);
            _buttonSelectWorkflowsFolder.Name = "_buttonSelectWorkflowsFolder";
            _buttonSelectWorkflowsFolder.Size = new Size(29, 23);
            _buttonSelectWorkflowsFolder.TabIndex = 1;
            _buttonSelectWorkflowsFolder.Text = "...";
            _buttonSelectWorkflowsFolder.UseVisualStyleBackColor = true;
            _buttonSelectWorkflowsFolder.Click += _buttonSelectWorkflowsFolder_Click;
            // 
            // groupBox4
            // 
            groupBox4.Controls.Add(_comboBoxWorkflows);
            groupBox4.Location = new Point(12, 128);
            groupBox4.Name = "groupBox4";
            groupBox4.Size = new Size(681, 54);
            groupBox4.TabIndex = 4;
            groupBox4.TabStop = false;
            groupBox4.Text = "Workflow";
            // 
            // _comboBoxWorkflows
            // 
            _comboBoxWorkflows.DropDownStyle = ComboBoxStyle.DropDownList;
            _comboBoxWorkflows.FormattingEnabled = true;
            _comboBoxWorkflows.Location = new Point(9, 19);
            _comboBoxWorkflows.Name = "_comboBoxWorkflows";
            _comboBoxWorkflows.Size = new Size(661, 23);
            _comboBoxWorkflows.TabIndex = 0;
            _comboBoxWorkflows.SelectedIndexChanged += _comboBoxWorkflows_SelectedIndexChanged;
            // 
            // TestVNGPortalForm
            // 
            AutoScaleDimensions = new SizeF(7F, 15F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(705, 492);
            Controls.Add(groupBox4);
            Controls.Add(groupBox3);
            Controls.Add(groupBox2);
            Controls.Add(groupBox1);
            Controls.Add(_buttonRun);
            FormBorderStyle = FormBorderStyle.Fixed3D;
            MaximizeBox = false;
            MinimizeBox = false;
            Name = "TestVNGPortalForm";
            StartPosition = FormStartPosition.CenterScreen;
            Text = "Test VNG Portal Tool";
            groupBox1.ResumeLayout(false);
            groupBox1.PerformLayout();
            groupBox2.ResumeLayout(false);
            groupBox2.PerformLayout();
            groupBox3.ResumeLayout(false);
            groupBox3.PerformLayout();
            groupBox4.ResumeLayout(false);
            ResumeLayout(false);
        }

        #endregion

        private Button _buttonRun;
        private GroupBox groupBox1;
        private TextBox _textBoxLog;
        private GroupBox groupBox2;
        private TextBox _textBoxIFCModelsFolder;
        private Button _buttonSelectIFCModelsFolder;
        private TextBox _textBoxWorkflowsFolder;
        private GroupBox groupBox3;
        private Button _buttonSelectWorkflowsFolder;
        private GroupBox groupBox4;
        private ComboBox _comboBoxWorkflows;
    }
}
