using System;
using Avalonia.Controls;
using Avalonia.Interactivity;

namespace desktop_software {
    public partial class MainWindow : Window {
        private double _previousVolume;

        public MainWindow() {
            InitializeComponent();
            DataContext = this;

            _previousVolume = VolumeSlider.Value;

            // Add event handler for the mute button
            MuteButton.Click += MuteButton_Click;
        }

        private void MuteButton_Click(object? sender, RoutedEventArgs e) {
            if (MuteButton.IsChecked == true) {
                // Save the current volume and mute it
                _previousVolume = VolumeSlider.Value;
                VolumeSlider.Value = 0;
                
            } else {
                // Restore previous volume
                VolumeSlider.Value = _previousVolume;
            }
        }
    }
}