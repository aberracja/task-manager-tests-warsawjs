import TaskManager from './TaskManager';

describe('TaskManager', () => {
  test('should exist', () => {
    expect(() => {
      new TaskManager();
    }).not.toThrow();
  });

  describe('methods', () => {
    let instance;

    beforeEach(() => {
      instance = new TaskManager();
    });

    afterEach(() => {
      instance = null;
    });

    test('has working getList() method', () => {
      const tasks = instance.getList();
      expect(tasks).toEqual([]);
    });

    test('has working addTask method', () => {
      expect(instance.addTask.length).toEqual(3);
      expect(instance.getList()).toHaveLength(0);
      instance.addTask('task1', () => { console.log(this); }, this);
      expect(instance.getList()).toHaveLength(1);
    });

    test('has working run() method', () => {
      const context = {};
      const results = [];
      instance.addTask('task1', function () { results.push(this); }, context);
      instance.addTask('task2', () => { results.push(5); }, this);
      instance.run();
      expect(results).toEqual([context, 5]);
    });
  });
});