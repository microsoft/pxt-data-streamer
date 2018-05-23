# Hacking STEM [![Build Status](https://travis-ci.org/Microsoft/pxt-hacking-stem.svg?branch=master)](https://travis-ci.org/Microsoft/pxt-hacking-stem)

Support for Hacking STEM activities in https://makecode.microbit.org

## Usage

Go to https://makecode.microbit.org, click on the gearwheel menu and select ``Add Package``, search for ``hacking stem`` and select this package.

## Reference

### ``serial.writeMilliNumber`` #serialWriteMilliNumber

The ``||serial:write milli number||`` block scales the input value by 1000 and writes it to the serial as a floating point number.

```sig
serial.writeMilliNumber(1);
```

For example,

```blocks
serial.writeMilliNumber(1);
```

writes the following number to serial

    0.001


## License

MIT

## Supported targets

* for PXT/microbit
(The metadata above is needed for package search.)

