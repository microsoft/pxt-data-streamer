dataStreamer.writeNumber(1 / 5, 1);
dataStreamer.writeLine();
dataStreamer.writeNumber(20 / 3, 2);
dataStreamer.writeLine();
dataStreamer.writeNumber(400 / 35, 3);
dataStreamer.writeLine();
dataStreamer.writeNumber(1000 / 2, 4);
dataStreamer.writeLine();
dataStreamer.writeNumber(1002, 5);
dataStreamer.writeLine();
dataStreamer.writeNumber(10000002 / 458, 6);
dataStreamer.writeLine();
dataStreamer.writeNumber(0, 7);
dataStreamer.writeLine();
dataStreamer.writeNumber(-1, 0);
dataStreamer.writeLine();
dataStreamer.writeNumber(-1000 / 3, 1);
dataStreamer.writeNumberArray([5, 2 / 5, 44 / 444, 5 / 5], 1);

forever(() => {
    led.toggle(0, 0)
    dataStreamer.writeNumber(input.lightLevel() / 0xff, 3)
    dataStreamer.writeLine();
    pause(50)
})