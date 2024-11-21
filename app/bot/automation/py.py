import pyautogui
import time

# Optional: Pause to give you time to switch to the target window
time.sleep(5)

# Get the current mouse position (optional, or set specific coordinates)
x, y = pyautogui.position()
print(f"Current mouse position: x={x}, y={y}")

# Move the mouse to the target position (if needed)
# pyautogui.moveTo(1740, 1056)

# Perform a left click
pyautogui.click(1740, 1056)

print("Clicked menu button")

time.sleep(2)

# Move the mouse to the target position (if needed)
# pyautogui.moveTo(1742, 1017)

# Perform a left click
pyautogui.click(1742, 1017)

print("Clicked tray icon")

time.sleep(2)

# Move the mouse to the target position (if needed)
# pyautogui.moveTo(1584, 922)

# Perform a left click
pyautogui.click(1584, 922)

print("Clicked disconnect button")

time.sleep(10)

# Move the mouse to the target position (if needed)
# pyautogui.moveTo(1584, 922)

# Perform a left click
pyautogui.click(1584, 922)

print("Clicked connect button")

time.sleep(20)

# Move the mouse to the target position (if needed)
# pyautogui.moveTo(10, 10)

# Perform a left click
pyautogui.click(10, 10)

print("Close vpn modal")

time.sleep(2)