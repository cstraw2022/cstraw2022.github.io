from moviepy import VideoFileClip, ImageClip, concatenate_videoclips, clips_array

def stack_media_vertically(file_paths, output_path='stacked_output.mp4'):
    clips = []

    # First pass: determine the maximum duration from videos
    max_duration = 0
    for path in file_paths:
        if path.lower().endswith('.mp4'):
            clip = VideoFileClip(path)
            max_duration = max(max_duration, clip.duration)
            clip.close()

    # Second pass: load all clips, extending images to video length
    for path in file_paths:
        if path.lower().endswith('.mp4'):
            clip = VideoFileClip(path)
        elif path.lower().endswith('.png'):
            clip = ImageClip(path).with_duration(max_duration)
        else:
            raise ValueError(f"Unsupported file type: {path}")
        
        # Optional: make all clips the same width
        clip = clip.resized(width=480)  # Resize width, height will scale
        clips.append(clip)

    # Stack all clips vertically
    final_video = clips_array([[clip] for clip in clips])
    final_video.write_videofile(output_path, codec="libx264")

    # Close all clips
    for clip in clips:
        clip.close()

files = ['swipe.mp4', 'newkanji.mp4', 'detailtap.mp4','Settings.png','Widget.png']
stack_media_vertically(files, 'final_stacked_video.mp4')