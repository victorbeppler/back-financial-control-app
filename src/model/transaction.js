export class ModelTransaction {
  constructor(data) {
    this.description = data.description;
    this.amount = data?.value ? this.formatValue(data.value) : 0;
    this.category = data.category ? this.formatCategory(data.category) : null;
    this.status = data.status ? this.formatStatus(data.status) : "Pending";
    this.dueDate = data.date ? this.formatDate(data.date) : null;
    this.environment = data.environment
      ? this.formatEnvironment(data.environment)
      : null;
    this.user = data.user ? data.user : null;
  }

  formatStatus(status) {
    if (status == 0 || status == 999) return "Pending";
    if (status == 1) return "Paid";
  }

  formatDate(date) {
    const [year, month, day] = date.split("-");
    return `${year}-${month}-${day}T00:00:00.000Z`;
  }

  formatValue(value) {
    return value
      .replace("R$", "")
      .replace(" ", "")
      .replace(".", "")
      .replace(",", ".");
  }

  formatCategory(category) {
    if (category === "999") return null;
    return category;
  }

  formatEnvironment(environment) {
    return environment.replace(/\D/g, "");
  }
}
