
# Device List

## Structure

`DeviceList`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deviceIds` | [`DeviceId1[] \| undefined`](../../doc/models/device-id-1.md) | Optional | **Constraints**: *Maximum Items*: `100` |

## Example (as JSON)

```json
{
  "deviceIds": [
    {
      "id": "id0",
      "kind": "imei"
    },
    {
      "id": "id1",
      "kind": "eid"
    },
    {
      "id": "id2",
      "kind": "esn"
    }
  ]
}
```

