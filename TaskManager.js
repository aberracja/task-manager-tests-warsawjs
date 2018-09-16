class TaskManager {
    constructor() {
      this.items = [];
    }
  
    getList() {
      return this.items;
    }
  
    addTask(name, callback, context) {
      this.items.push({ name, callback, context });
    }
  
    run() {
      this.items.forEach(({ callback, context }) => {
        callback.call(context);
      });
    }
}

export default TaskManager;
