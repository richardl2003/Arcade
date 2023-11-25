import cv2

class VideoCamera(object):
    def __init__(self, input, flip, draw_landmarks, display, map, split):
      self.input = input
      self.flip = flip
      self.draw_landmarks = draw_landmarks
      self.display = display
      self.map = map
      self.split = split
      self.video = cv2.VideoCapture(0)

    def __del__(self):
      self.video.release()

    def get_frame(self):
      ret, frame = self.video.read()
      ret, jpeg = cv2.imencode('.jpg', frame)
      return jpeg.tobytes()  