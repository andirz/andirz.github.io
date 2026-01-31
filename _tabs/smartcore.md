---
layout: page
title: SimSim Online Store Data
icon: fas fa-shopping-cart
---

# 🛒 SimSim Online Store | User Data Documentation

This documentation explains the structure and behavior of the `sim_data_[SimID].json` files. These files act as a local data cache for the **SimSim Online Store**.

---

## 📂 Storage & Identification
Data is stored per Sim and is **strictly separated by Save-Slots**. This ensures that there are no conflicts even if Sims in different save games share the same ID.

* **Path:** `Documents/Electronic Arts/The Sims 4/saves/Andirz_SimSimStore/[SaveSlotID]/`
* **Filename:** `sim_data_[SimID].json`

---

## 🏗 Data Segments

<details>
<summary>👤 <b>ACCOUNT_DATA (Status)</b></summary>

| Field | Description |
| :--- | :--- |
| `name` | The Sim's name (Unicode encoded). |
| `sim_id` | The unique internal ID of the Sim. |
| `premium` | Indicates if the Premium Membership is active. |
</details>

<details>
<summary>📈 <b>STATISTICS (Finances)</b></summary>

**Technical Note:** These values are mirrored in the game's **Persistent Tuning Statistics**. The JSON serves as a readable summary and local cache.
* **`total_count`**: Total number of transactions performed.
* **`total_money`**: Cumulative turnover in Simoleons.
* **`bonus_points`**: Current balance of loyalty points.
</details>

<details>
<summary>📦 <b>ITEMS (Memory & Inventory)</b></summary>

This section holds the "Memory" of the store (e.g., active listings, cart items, or recent interactions).
* **Key:** The Tuning-ID of the object.
* **Attributes:** Price, count, quality, and object state (freshness, etc.).
</details>

---

## 🗑 What happens if data is deleted?

Since the system uses a redundant storage approach, deleting the `.json` files is **not dramatic**, but it does cause a minor "memory loss" for the store:

1.  **Stats are safe:** Because bonus points and turnover are backed up in the game’s *Persistent Stats* (Tuning), they are **not lost**. The Sim retains their wealth and points.
2.  **Loss of "Store Memory":** The Sim will no longer remember **recent purchases** or **favorite items**.
3.  **Inventory Loss:** Any items currently listed in the store or held in the "shopping cart" that have not been physically moved to the Sim's inventory will be lost.
4.  **Automatic Rebuild:** The script will simply regenerate a fresh file the next time the Sim visits the store or triggers a store action. No errors will occur in your save game.

---

## 🛠 Manual Editing

You can edit the file with any text editor (like VS Code or Notepad++) to manually adjust values or toggle the Premium status:

```json
"ACCOUNT_DATA": {
    "premium": true
}
