/**
 * For when you implement using an interface (the other method is a class)
 */

export interface Adapter {
  // this is our blueprint for adapters

  /**
   * @param data
   * @function {adapt}
   * This means any implementation of this interface has to use the adapt() method.
   */
  adapt(data: any): any;
}
 