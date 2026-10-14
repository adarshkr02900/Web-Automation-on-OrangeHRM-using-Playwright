const { expect } = require('@playwright/test');

class DashboardPage {
    constructor(page) {
        this.page = page;
        this.leaveElement = page.getByRole('link', { name: 'Leave' });
    }

    gotoLeavePage = async () => {
        await this.leaveElement.click();
        await expect(this.page).toHaveURL(/\/leave\//);
        await expect(this.page.getByRole('link', { name: 'Apply' })).toBeVisible();
    }
}

module.exports = DashboardPage;
