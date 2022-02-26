# Object Oriented Design

Process of Object Oriented Design usually starts with a simple question. In this note we'll use: **Design a Parking Lot**

<img src="C:\Users\EddyM\Desktop\KnowledgeBase\Assets\OOD-1.jpg" alt="OOD-1" style="zoom:50%;" />

## Basics

**Communication** is the key of OOD interview, you and the interviewer will constantly negotiate on how the system is designed. The process usually goes:

### 1. **Clarification**

1. What kind of parking lot? Paid vs. free? Automatic? Supports vehicle of different size? 

### 2. **List Use Cases** (APIs)

1. The user can see if there's available space: 

   ```java
   public ? checkAvailable(?);
   ```

2. The user can park into available space:

   ```java
   public ? park(?);
   ```

3. The user can leave

   ```java
   public ? leave(?);
   ```

4. The user can pay for time parked

   ```java
   public ? pay(?);
   ```

5. The parking lot can keep record of parking

### 3. **Prioritize**

1. Priority 0: #1, #2, #3
2. Priority 1: #4
3. Priority 2: #5

### 4. **Define Classes**

There's no correct answer to structuring the system: there's always room for optimization 

```java
public class ParkingLot {
    private List<Spot> availble;
    private List<Spot> used;
    ...
}
```

```java
public class Spot {
    private final Vihecle size;
    private Vihecle parked;
}
```

```java
public abstract class Vehicle {
    private String plate;
}
```

```java
public class LargeVehicle extends Vihecle {}
public class RegularVehicle extends Vihecle {}
public class SmallVehicle extends Vihecle {}
public class ExtraLargeVehicle extends Vihecle {}
```

```java
public class Record {
    private final DateTime startTime;
    private DateTime endTime;
    public void Pay();
}
```

2022/01/22 11:07 AM Eddy's comment: I realize this is about as far as I can go, that my OOD need some serious work

### 5. **Optimize Design**

### 6. **Coding**

### 7. **Test**

In the above, 6 & 7 comes after 4 & 5 and we should prioritize preparing 4 & 5 in a 40-minute interview.

See Appendix. A for possible complete code for this problem 



## Techniques

Here are some of the OOD techniques that Eddy is unfamiliar & are important

```
abstract class
interface
enum
extend / implement
super() / @Override
when to use final / best practice
using assert in Test
```



### 1. 





# Appendix

## Parking Lot Complete Code

### Parking

1. Parking Lot

```java
public class ParkingLot {
    
    private final List<ParkingSpot> spots;
    
    // constructor takes # of spots, and assign 40% to compact, 40% to regular, 20% to large
    public ParkingLot(int spots) {...}
    
    public boolean hasSpot(Vehicle v) {
        // Optimizable?
        for (ParkingSpot s : spots) {
            if (s.fit(v)) {
                return true;
            }
        }
        return false;
    }
    
    public boolean park(Vehivle v) {
        // Optimizable?
        for (ParkingSpot s : spots) {
            if (s.fit(v)) {
                s.park(v);
                return true;
            }
        }
        return false;
    }
    
    public void leave(Vehicle v) {
        // Optimizable?
        for (ParkingSpot s : spots) {
            if (s.getVehicle() == v) {
                s.leave();
                return true;
            }
        }
        return false;
    }
    
}
```

2. Parking Spot

```java
public class ParkingSpot {
    private final VehicleSize size;
    private Vehicle currentParked;
    
    public boolean fit(Vehicle v) {
        return currentParked == null && size.getSize() >= v.getSize();
    }
    
    public void park(Vehicle v) {
        if (fit(v)) {
            currentParked = v;
        } else {
            // throw exception
        }
    } 
    
    public void leave() {
        currentPark = null;
    }
    
    Vehicle getVehicle() {
        return currentParked;
    }
}
```



### Vehicle

1. Vehicle Concepts

```java
public enum VehicleSize {
    Compact(1),
    Regular(2),
    Large(3);
    
    private final int size;
    
    VehicleSize(int size) {
        this.size = size;
    } 
}

public abstract class Vehicle {
    public abstract VehicleSize getSize();
}
```

2. Actual Vehicle

```java
public class Car extends Vehicle {
    @Override
    public VehicleSize getSize() {
        return VehicleSize.Compact;
    }
}

public class Truck extends Vehicle {
    @Override
    public VehicleSize getSize() {
        return VehicleSize.Large();
    }
}
```

### Test

The following test can serve as an example

```java
public class Test {
    public static void main(String[] args) {
        ParkingLot lot = new ParkingLot(100);
        List<Vehicle> list = new ArrayList<>();
        for (int i = 0; i < 50; i++) {
            final Vehicle v = i % 2 == 0 ? new Car() : new Truck();
            boolean hasSpot = lot.hasSpot(v);
            if (i < 40) {
                assert hasSpot;
                assert lot.park(v);
            } else {
                assert !hasSpot;
                assert !lot.Park(v);
            }
        }
        assert list.size() == 50;
        int i = 0;
        for (Vehicle v : list) {
            assert i >= 40 || lot.leave(v);
            i++;
        }
    }
}
```

