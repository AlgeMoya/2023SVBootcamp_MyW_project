from django.db.backends.postgresql import models

class ChatLog(models.Model):
    novel_id = models.IntegerField(primary_key=True)
    chat_log = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True, null=True)
    deleted_at = models.DateTimeField(null=True)

    def __str__(self):
        return f"ChatLog {self.novel_id}"
