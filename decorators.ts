// @Component
// @ Selector
// @useState

// Factory
function Logger(prefix: string) {
 return (target) => {

   console.log(`${prefix} + ${target}`);
 };

}

@Logger('awesome')
class Foo {}

// Class decorator

// Property decorator

// Method decorator
// Parameter decorator
// Acessor decorator